# vanilla-extract issue reproduction

## Test Environments

| system                      | version      |
| --------------------------- | ------------ |
| node                        | v18.13.0     |
| package-management          | pnpm@v8.6.10 |
| os                          | windows 10   |
| next                        | v13.4.12     |
| vanilla-extract/css         | v1.12.0      |
| vanilla-extract/next-plugin | v2.2.1       |

## Getting started

1. install packages and run dev

```bash
pnpm
pnpm dev
```

2. check localhost:3000, see there is no orange background on "Hello World".
![issue1](https://github.com/Sharlottes/ve-missing-style-ireproduction/assets/60801210/ff823fd2-018e-4884-8dd2-5605fc8db2d6)

3. check network chrome devtool, see there even no CSS file download.
![issue2](https://github.com/Sharlottes/ve-missing-style-ireproduction/assets/60801210/46358319-fb64-4378-af4f-c4173d7e82cc)
