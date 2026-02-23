from PIL import Image
from collections import Counter

def analyze_image(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        pixels = img.getdata()
        
        # Filter out transparent pixels
        opaque_pixels = [p for p in pixels if p[3] > 0]
        
        if not opaque_pixels:
            print("Image is completely transparent.")
            return

        # Count colors
        color_counts = Counter(opaque_pixels)
        
        print(f"Total opaque pixels: {len(opaque_pixels)}")
        print("Top 20 most common colors (R, G, B, A):")
        for color, count in color_counts.most_common(20):
            print(f"{color}: {count}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    analyze_image("/Users/vaibhavsingh/Downloads/willsmeet-dark-theme/public/assets/Willsmeet2.png")
