uniform vec3 lightPos;
uniform vec3 tangent;

varying vec2 uvPosition;
varying vec3 lightDir;
varying vec3 cameraDir;

void main(void)
{
  uvPosition = uv;

  vec3 bitangent = cross(normal, tangent);
  lightDir = lightPos - position;
  lightDir = vec3(dot(tangent, lightDir), dot(bitangent, lightDir), dot(normal, lightDir));
  cameraDir = cameraPosition - position;
  lightDir = vec3(dot(tangent, cameraDir), dot(bitangent, cameraDir), dot(normal, cameraDir));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}