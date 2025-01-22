```
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user writes a note and clicks the Save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with JSON payload
    activate server
    server-->>browser: 201 new_note_spa.json (contains the updated list of notes)
    deactivate server

    Note right of browser: The SPA processes the response and updates the local state with the new note

    Note right of browser: The browser dynamically re-renders the updated list of notes
```
