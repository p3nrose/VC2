varying vec3 normalWS;

void main(void)
{
  normalWS = normalMatrix * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}