; Define injections for embedded languages in strings if needed
; Currently no injections are defined, as FASM typically doesn't embed other languages

; Example of injection if needed in the future:
; ((string) @injection.content
;  (#match? @injection.content "^SQL:")
;  (#set! injection.language "sql")
;  (#offset! @injection.content 0 4 0 0))