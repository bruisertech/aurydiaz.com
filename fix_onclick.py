import re
import glob

# The issue is we need to add onclick handlers to the a tags in the mega-menu and mobile menu in index.html, director.html, contacto.html
files = ['index.html', 'director.html', 'contacto.html']

for f in files:
    with open(f, 'r') as file:
        content = file.read()

    # Let's just find and replace for the mega menu and mobile menu based on the labels
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
        ('penal', 'Defensa Penal'),
        ('penal', 'Criminal Defense'),
        ('disciplinario', 'Derecho Público'),
        ('disciplinario', 'Public Law'),
    ]

    for id, text in replacements:
        # For a tag with areas.html#areas
        # Note: the a tags currently look like: <a href="areas.html#areas" class="featured" data-lang="es"><i class="fa-solid fa-star icon-gold" style="font-size: 0.8em;"></i> Defensa Penal y Sistema Acusatorio</a>
        # We want to replace href="areas.html#areas" with href="areas.html#areas" onclick="sessionStorage.setItem('openModal', '{id}');"
        # We need a robust regex to target exactly those tags.
        pass
