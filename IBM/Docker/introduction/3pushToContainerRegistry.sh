# Push the image to IBM Cloud container Registry
# Get information about the account
ibmcloud target
# See the namespace
ibmcloud cr namespaces
# Set region 
ibmcloud cr region-set us-south
# Log Docker daemon to IBM Cloud Container Registry
ibmcloud cr login
# Export namespace as an environment variable
export MY_NAMESPACE=sn-labs-$USERNAME


# Tag the image to push it to the registry
docker tag myimage:v1 us.icr.io/$MY_NAMESPACE/hello-world:1
# Push the tagged image
docker push us.icr.io/$MY_NAMESPACE/hello-world:1
# Verify that the image was successfully pushed
ibmcloud cr images
