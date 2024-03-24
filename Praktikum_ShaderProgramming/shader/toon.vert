out vec3 WorldSpaceNormal;

void main(void)
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    WorldSpaceNormal = normalize((modelViewMatrix * vec4(normal, 0.0)).xyz);
}