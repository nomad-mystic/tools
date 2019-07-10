#!/usr/bin/env bash
#
# Developed by Ricardo Barantini & Keith Murphy
# Contact ricardobarantini@protonmail.com | Nomadmystics@gmail.com
#

dockercompose.sh(){
#    sudo apt-get update;
#    sudo apt-get install curl;
#    sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose;
#    sudo chmod +x /usr/local/bin/docker-compose;
#    echo docker-compose --version;

   dockercomposeautocomplete.sh;

}

dockercomposeautocomplete.sh(){
     # Check if the would like to add code completion
    TEST=$1
    echo -n1 -p "Would you like to add code completion to bash | oh-my-zsh? [y,n] "
    read answer
    case $answer in
        y|Y echo "yes";
        n|N echo "no";
        *) echo "dont know";
}

# call function dockercompose.sh
dockercompose.sh