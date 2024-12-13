#labs with skills Network
# Verify Docker CLI
docker --version
# Verify ibmcloud CLI
ibmcloud --version
# Clone the git repository
[ ! -d 'CC201' ] && git clone https://github.com/ibm-developer-skills-network/CC201.git

# Change working directory
cd CC201/labs/1_ContainersAndDocker/
# List content
ls


# List images
docker images
# Pull image from Docker Hub 
docker pull hello-world
docker images
# Run image as a container
docker run hello-world
# List containers to see that it ran and exited
docker ps -a
# Remove the container
docker container rm 774cff1ef55d
docker ps -a

