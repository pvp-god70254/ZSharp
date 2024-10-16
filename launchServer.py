import os
import sys

a = 8000
try:
    a = sys.argv(1)
except Exception:
    a = input('port: ')


os.system(f'python3 -m http.server {a}')
