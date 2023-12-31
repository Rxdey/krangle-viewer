# krangle-viewer

Tool to generate `.json` node pairs for the Path of Exile Krangled Passives event.

Largely based on [krangle-viewer by joonazan on github](https://github.com/joonazan/krangle-viewer/) with modifications inspired by [ellomenop on github](https://github.com/ellomenop/krangle-viewer) and oldling.

This tool can be hosted as a website (e.g. on github pages) but I recommend just downloading and running it locally for simplicity.

## How to Use
- download this repository with `git` or just click `Code > Download ZIP` on github 
- open `index.html` in your browser (e.g. double click on `[...]/Downloads/krangle-viewer/index.html`)
- click on a node, then use the top left search bar to find its appropriate replacement and click it
- click 'Copy info to clipboard' to copy your changes so far in `.json` format
- save your changes into a file (e.g. open Notepad, paste the `.json` and save it as `my_krangled_passives.json`)
- convert them to PoB format using another tool (for example, [my krangler python code](https://github.com/efunn/krangler))
- your changes are 'saved' in your browsers local storage, so if you close `index.html` and open it again, your changes will reappear
- IF YOU CLICK 'Reset to default' YOUR CHANGES WILL BE GONE FOREVER (so make sure to save a copy of `my_krangled_passives.json` periodically)

## Features (relative to original tool by joonazan)
- tree updates automatically on node replacement clicked
- search bar automatically focuses when node initially clicked
- search bar has a solid background and automatically shows/hides on click

## Limitations
- node icons are krangled (sorry!) due to using older javascript skill tree data (I think this could easily be fixed by pulling newer javascript from GGG but I didn't want to break anything else)
- ascendancy input is a bit weird, you need to scroll in/out sometimes to refresh/show the nodes


# 使用
- 修改了可以匹配天赋id，替换成中文天赋树，其它不变
- 点击天赋点，右上角搜索要更换的天赋点(名字或者id)
- 从列表选择天赋点