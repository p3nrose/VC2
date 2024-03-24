varying vec3 worldSpaceNormal;

void main(void)
{
    worldSpaceNormal = normal * normalMatrix;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}