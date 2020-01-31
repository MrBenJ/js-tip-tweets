
#!/bin/bash

# TIP: Bundle a git repo + all its
# branches with git bundle!

git bundle create name_of.bundle --all

# Then you can unpack it with git clone!
git clone ./path/to/name_of.bundle

