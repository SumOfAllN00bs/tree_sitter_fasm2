; Fold macro definitions
(macro_definition) @fold

; Fold sections
(directive 
  (directive_arguments 
    (string))) @fold.begin

; Fold basic blocks with labels
(label_definition) @fold.begin
(instruction) @fold.content

; Basic fold for any multi-line sections
(source_file) @fold