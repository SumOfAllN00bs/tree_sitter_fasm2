; Simple FASM2 example to test tree-sitter grammar

format PE64 console
entry main

section '.text' code readable executable

main:
    mov eax, 1
    mov ebx, 5
    add eax, ebx     ; add 5 to 1
    cmp eax, 6
    jne error
    
    sub eax, 3       ; 6 - 3 = 3
    test eax, eax
    jz error
    
    ; Print "Hello, World!" using Windows syscalls
    mov ecx, message
    mov rdx, message_len
    call print_string
    
    xor ecx, ecx     ; return 0
    call exit
    
error:
    mov ecx, 1       ; return error code 1
    call exit
    
print_string:
    ; Windows syscall to print a string
    ret
    
exit:
    ; Windows syscall to exit the program
    ret

section '.data' data readable writeable
    message db 'Hello, World!', 13, 10
    message_len = $ - message