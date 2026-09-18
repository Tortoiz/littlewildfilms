from pathlib import Path
import re

base = Path('/home/ubuntu/little-wild-films-v2/src/content/films')
films = {
    'the-lantern-in-the-orchard.md': {
        'share': '/manus-storage/lantern-frame-orchard_7409b10e.jpg',
        'gallery': [
            ('/manus-storage/lantern-frame-orchard_7409b10e.jpg', 'A lantern glowing beneath flowering apple branches.', 'Orchard atmosphere frame.'),
            ('/manus-storage/lantern-frame-child_9d61f201.jpg', 'A child carrying a lantern through tall silver grass.', 'The walk home.'),
            ('/manus-storage/hero-film-still_04dfca7c.jpg', 'A warm point of light resting on a mossy path.', 'Lantern continuity frame.'),
        ],
    },
    'the-last-blue-hour.md': {
        'share': '/manus-storage/bluehour-shoreline_fff6a602.jpg',
        'gallery': [
            ('/manus-storage/bluehour-shoreline_fff6a602.jpg', 'A girl collecting blue light in a glass jar beside the sea.', 'The last light study.'),
            ('/manus-storage/bluehour-tide_86f8cf90.jpg', 'A warm lantern reflection moving across empty tide pools.', 'Shoreline light continuity.'),
            ('/manus-storage/film-card-still_16d5ff5a.jpg', 'A quiet path disappearing into a blue-hour valley.', 'Closing frame study.'),
        ],
    },
    'after-the-rain.md': {
        'share': '/manus-storage/after-rain-city_1d87a887.jpg',
        'gallery': [
            ('/manus-storage/after-rain-city_1d87a887.jpg', 'A rain-darkened hill-town street reflecting a sodium lamp.', 'Location and weather study.'),
            ('/manus-storage/after-rain-window_a4e13233.jpg', 'A figure watching the storm through a rain-streaked window.', 'Interior light study.'),
            ('/manus-storage/hero-film-still_04dfca7c.jpg', 'Distant hills emerging from the weather.', 'Transition frame.'),
        ],
    },
    'mosslight.md': {
        'share': '/manus-storage/mosslight-forest-gate_0bb6d6e6.jpg',
        'gallery': [
            ('/manus-storage/mosslight-forest-gate_0bb6d6e6.jpg', 'An ancient moss-covered gate lit by remembered footsteps.', 'First world-building pass.'),
            ('/manus-storage/mosslight-water-memory_3710abca.jpg', 'A forest pool reflecting a different season.', 'Memory and water study.'),
            ('/manus-storage/film-card-still_16d5ff5a.jpg', 'A distant valley glimpsed through moss and trees.', 'The forest remembers.'),
        ],
    },
}

for filename, config in films.items():
    path = base / filename
    text = path.read_text()
    text = re.sub(r'^shareImage:.*\n', '', text, flags=re.M)
    text = text.replace('posterImage:', f"shareImage: {config['share']}\nposterImage:", 1)
    gallery = 'gallery:\n' + ''.join(
        f'  - src: {src}\n    alt: {alt}\n    caption: {caption}\n'
        for src, alt, caption in config['gallery']
    )
    text = re.sub(r'^gallery:\n(?:  - src:.*\n    alt:.*\n    caption:.*\n)+', gallery, text, count=1, flags=re.M)
    path.write_text(text)
    print(f'updated {path}')
