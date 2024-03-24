varying vec2 vUV;
varying vec3 lightDirection;
varying vec3 cameraDirection;

uniform vec3 tangent;
uniform vec3 lightPosition;


void main(void)
{
  vUV = uv;

  vec3 biTangent = cross(normal, tangent);

  mat3 TBN = transpose(mat3(tangent, biTangent, normal));

  vec3 lightDir = lightPosition - position;
  lightDirection = TBN * lightDir;

  vec3 cameraDir = cameraPosition - position;
  cameraDirection = TBN * cameraDir;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}