; x86 assembler
;
; Calculates the CRC-16 checksum of a byte array using the standard CRC-16-CCITT polynomial.
; Input:
;   esi - pointer to the byte array
;   ecx - length of the byte array
; Output:
;   ax - the 16-bit CRC value
crc16_ccitt:
    xor ax, ax          ; initialize CRC to zero
    mov dx, 0xffff     ; initialize the remainder to 0xffff
    mov cx, [ecx]       ; load the length of the byte array
    jcxz crc16_done     ; if length is zero, we're done

    mov bx, 0x1021      ; load the standard CRC-16-CCITT polynomial

crc16_start:
    mov esi, [esi]      ; load the first byte of the array
    crc16_loop:
        xor ax, si      ; XOR with the byte
        shr ax, 8       ; shift out the high byte of the CRC
        mov dl, ah      ; move the high byte of the CRC to DL
        xor dl, bh      ; XOR with the high byte of the polynomial
        shl ax, 8       ; shift the high byte of the CRC back into the low byte
        xor ax, dx      ; XOR with the remainder
        inc esi         ; increment the pointer to the next byte
        dec cx          ; decrement the byte count
        jnz crc16_loop  ; loop until all bytes have been processed

crc16_done:
    ret
