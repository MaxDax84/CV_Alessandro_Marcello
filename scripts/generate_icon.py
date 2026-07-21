"""Deriva favicon.ico e icone PWA dal logomark esistente (apple-icon.png, 180x180)."""

from PIL import Image

BG = "#141420"

master = Image.open("public/apple-icon.png").convert("RGBA")

# favicon.ico multi-size
icons = [master.resize((s, s), Image.LANCZOS) for s in (16, 32, 48)]
icons[0].save(
    "public/favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)],
    append_images=icons[1:],
)

# PWA icons (192/512) — flatten onto opaque bg to match dark theme_color
for size in (192, 512):
    canvas = Image.new("RGBA", (size, size), BG)
    resized = master.resize((size, size), Image.LANCZOS)
    canvas.alpha_composite(resized)
    canvas.convert("RGB").save(f"public/icons/icon-{size}.png")

# Maskable — shrink into ~72% safe zone, full-bleed bg
for size in (192, 512):
    inner_size = round(size * 0.72)
    inner = master.resize((inner_size, inner_size), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), BG)
    off = (size - inner_size) // 2
    canvas.alpha_composite(inner, (off, off))
    canvas.convert("RGB").save(f"public/icons/icon-{size}-maskable.png")

print("done")
