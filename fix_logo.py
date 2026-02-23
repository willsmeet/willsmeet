from PIL import Image

def fix_logo(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            r, g, b, a = item
            
            # Check if pixel is grey-ish (low saturation)
            # The text color is around (86, 87, 87)
            # The blue icon is around (0, 90, 255) -> High saturation
            
            saturation = max(r, g, b) - min(r, g, b)
            
            # If saturation is low (it's grey/black/white) AND it's not fully transparent
            # We also want to avoid changing the transparent background (a=0)
            if a > 0 and saturation < 30:
                # Make it white, preserving original alpha
                new_data.append((255, 255, 255, a))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully saved fixed logo to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    fix_logo(
        "/Users/vaibhavsingh/Downloads/willsmeet-dark-theme/public/assets/Willsmeet2.png",
        "/Users/vaibhavsingh/Downloads/willsmeet-dark-theme/public/assets/Willsmeet_white.png"
    )
