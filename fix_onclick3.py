import re

files = ['index.html', 'director.html', 'contacto.html', 'areas.html']

replacements = [
    ('penal', 'Defensa Penal y Sistema Acusatorio'),
    ('penal', 'Criminal Defense & Accusatory System'),
    ('disciplinario', 'Derecho Público y Disciplinario'),
    ('disciplinario', 'Public & Disciplinary Law'),
    ('civil', 'Litigio Civil y Responsabilidad'),
    ('civil', 'Civil Litigation & Liability'),
    ('jep', 'Justicia Transicional y DDHH'),
    ('jep', 'Transitional Justice & Human Rights'),

    ('societario', 'Derecho Comercial y Societario'),
    ('societario', 'Commercial & Corporate Law'),
    ('tributario', 'Derecho Tributario y Aduanero'),
    ('tributario', 'Tax & Customs Law'),
    ('pi', 'Propiedad Intelectual y LegalTech'),
    ('pi', 'Intellectual Property & LegalTech'),
    ('ph', 'Propiedad Horizontal e Inmobiliario'),
    ('ph', 'Real Estate & Property Law'),

    ('laboral', 'Derecho Laboral y Seguridad Social'),
    ('laboral', 'Labor & Social Security Law'),
    ('familia', 'Derecho de Familia y Sucesiones'),
    ('familia', 'Family Law & Inheritance'),
    ('insolvencia', 'Insolvencia de Persona Natural'),
    ('insolvencia', 'Personal Insolvency'),

    # mobile
    ('penal', '>Defensa Penal<'),
    ('penal', '>Criminal Defense<'),
    ('disciplinario', '>Derecho Público<'),
    ('disciplinario', '>Public Law<'),
]

for f in files:
    with open(f, 'r') as file:
        content = file.read()

    # Restore the onclick handlers to the a tags
    for id, text in replacements:
        if '>' in text:
            # For mobile tags, text looks like >Defensa Penal<
            # Original could be: <a href="areas.html#areas" data-lang="es">Defensa Penal</a>
            # Replace: <a href="areas.html#areas" onclick="openModal('{id}');return false;" data-lang="es">Defensa Penal</a>
            text_inner = text.strip('<>')
            pattern = re.compile(rf'(<a href="[^"]*areas\.html#areas"[^>]*)>(<i[^>]*></i>\s*)?{re.escape(text_inner)}</a>')
            content = pattern.sub(rf'\1 onclick="openModal(\'{id}\');return false;">\2{text_inner}</a>', content)
        else:
            pattern = re.compile(rf'(<a href="[^"]*areas\.html#areas"[^>]*)>(<i[^>]*></i>\s*)?{re.escape(text)}</a>')
            content = pattern.sub(rf'\1 onclick="openModal(\'{id}\');return false;">\2{text}</a>', content)

    with open(f, 'w') as file:
        file.write(content)
