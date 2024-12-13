# Build image using a Dockerfile
docker build . -t myimage:v1
# List images
docker images

# Run the image as a container
docker run -dp 8080:8080 myimage:v1
# Ping the application
curl localhost:8080

# Stop the container
# () List of running containers
docker stop $(docker ps -q)
# Check
docker ps