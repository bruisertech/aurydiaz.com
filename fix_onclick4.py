import re

files = ['index.html', 'director.html', 'contacto.html']

for f in files:
    with open(f, 'r') as file:
        content = file.read()

    # We had a typo in previous fix: `onclick="openModal(\'penal\');return false;"`.
    # Let's fix this up.
    # The users intention: "The patch fails to properly address the onclick="openModal()" requirement. The user asked to update the links to point to areas.html#areas, but the agent entirely removed the onclick handlers in index.html, director.html, and contacto.html, meaning users can no longer open those specific modals from the navigation menu."
    # How to make openModal() work from navigation menu when clicking from index.html, and the modal is defined in index.html as well?
    # Actually, as we saw earlier, `modal-overlay` and `modalData` ARE in all files!
    # That means you CAN just open the modal on the current page. You don't need to go to areas.html to open it!
    # Wait, the user said: "The user asked to update the links to point to areas.html#areas, but the agent entirely removed the onclick handlers... meaning users can no longer open those specific modals from the navigation menu."
    # So the link should be `href="areas.html#areas"` BUT it should ALSO have `onclick="openModal('...'); return false;"`. Wait, if it has `return false;`, it WON'T navigate to `areas.html#areas`.
    # Let's just restore `onclick="openModal('id'); return false;"` and keep `href="areas.html#areas"`. Or maybe remove `return false` and set sessionStorage so it opens after navigation.

    # Actually, simpler: The user literally just said: "the agent entirely removed the onclick handlers in index.html, director.html, and contacto.html, meaning users can no longer open those specific modals from the navigation menu."

    content = content.replace("onclick=\"openModal(\\'penal\\');return false;\"", "onclick=\"openModal('penal'); return false;\"")
    content = content.replace("onclick=\"openModal(\\'disciplinario\\');return false;\"", "onclick=\"openModal('disciplinario'); return false;\"")
    content = content.replace("onclick=\"openModal(\\'civil\\');return false;\"", "onclick=\"openModal('civil'); return false;\"")
    content = content.replace("onclick=\"openModal(\\'jep\\');return false;\"", "onclick=\"openModal('jep'); return false;\"")

    content = content.replace("onclick=\"openModal(\\'societario\\');return false;\"", "onclick=\"openModal('societario'); return false;\"")
    content = content.replace("onclick=\"openModal(\\'tributario\\');return false;\"", "onclick=\"openModal('tributario'); return false;\"")
    content = content.replace("onclick=\"openModal(\\'pi\\');return false;\"", "onclick=\"openModal('pi'); return false;\"")
    content = content.replace("onclick=\"openModal(\\'ph\\');return false;\"", "onclick=\"openModal('ph'); return false;\"")

    content = content.replace("onclick=\"openModal(\\'laboral\\');return false;\"", "onclick=\"openModal('laboral'); return false;\"")
    content = content.replace("onclick=\"openModal(\\'familia\\');return false;\"", "onclick=\"openModal('familia'); return false;\"")
    content = content.replace("onclick=\"openModal(\\'insolvencia\\');return false;\"", "onclick=\"openModal('insolvencia'); return false;\"")

    # Clean up double onclicks
    content = re.sub(r'onclick="if\(window\.location\.pathname\.includes\(\'areas\.html\'\)\)\{openModal\(\'penal\'\);return false;\}"', '', content)

    with open(f, 'w') as file:
        file.write(content)
