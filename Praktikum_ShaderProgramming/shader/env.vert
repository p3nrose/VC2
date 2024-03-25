uniform vec3 lightPos;

varying vec3 cameraDir;
varying float lambert;

void main(void)
{
  cameraDir = reflect(position - cameraPosition, normal);
  lambert = max(0.0, dot(lightPos - position, normal));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}