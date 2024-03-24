varying vec2 vUV;
varying vec3 lightDirection;
varying vec3 cameraDirection;

uniform sampler2D albedoMap;
uniform sampler2D normalMap;
uniform vec3 ambientColor;
uniform vec3 diffuseColor;
uniform vec3 specularColor;
uniform float shininess;

void main(void)
{
  vec3 normal = texture2D(normalMap, vUV).rgb;
  vec3 normalScaled = normal * 2.0 - 1.0;

  vec3 lightDirectionNormal = normalize(lightDirection);
  vec3 cameraDirectionNormal = normalize(cameraDirection);

  vec3 halfVector = normalize(lightDirectionNormal + cameraDirectionNormal);
  float lambert = max(0.0, dot(normalScaled, lightDirectionNormal));
  float phong = max(0.0, dot(normalScaled, halfVector));
  float specularPower = pow(phong, shininess);

  vec3 diffuse = diffuseColor * lambert;
  vec3 specular = specularColor * specularPower;

  vec3 baseColor = texture2D(albedoMap, vUV).rgb;
  gl_FragColor = vec4(ambientColor * baseColor + diffuse * baseColor + specular, 1.0);
}