from pathlib import Path

root = Path('/home/ubuntu/little-wild-films-v2')
replacements = {
    '/manus-storage/logo-little-wild-films_ab28ea8f.png': '/assets/logo-little-wild-films.png',
    '/manus-storage/hero-film-still_04dfca7c.jpg': '/assets/hero-film-still.jpg',
    '/manus-storage/film-card-still_16d5ff5a.jpg': '/assets/film-card-still.jpg',
    '/manus-storage/lantern-frame-orchard_7409b10e.jpg': '/assets/lantern-frame-orchard.jpg',
    '/manus-storage/lantern-frame-child_9d61f201.jpg': '/assets/lantern-frame-child.jpg',
    '/manus-storage/bluehour-shoreline_fff6a602.jpg': '/assets/bluehour-shoreline.jpg',
    '/manus-storage/bluehour-tide_86f8cf90.jpg': '/assets/bluehour-tide.jpg',
    '/manus-storage/after-rain-city_1d87a887.jpg': '/assets/after-rain-city.jpg',
    '/manus-storage/after-rain-window_a4e13233.jpg': '/assets/after-rain-window.jpg',
    '/manus-storage/mosslight-forest-gate_0bb6d6e6.jpg': '/assets/mosslight-forest-gate.jpg',
    '/manus-storage/mosslight-water-memory_3710abca.jpg': '/assets/mosslight-water-memory.jpg',
    '/manus-storage/the-last-blue-hour-preview_f63d2d09.mp4': '/assets/the-last-blue-hour-preview.mp4',
}
for path in (root / 'src').rglob('*'):
    if not path.is_file() or path.suffix not in {'.astro', '.md', '.ts', '.tsx', '.css'}:
        continue
    text = path.read_text()
    updated = text
    for old, new in replacements.items():
        updated = updated.replace(old, new)
    if updated != text:
        path.write_text(updated)
        print(path)
