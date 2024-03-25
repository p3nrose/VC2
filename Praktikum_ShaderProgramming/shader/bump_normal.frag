uniform sampler2D textureMurAmbiant;
uniform sampler2D textureMurNormalMap;
uniform vec4 ambiantColor;
uniform float difuseLightFrac;
uniform float specularLightFrac;
uniform float shininess;

varying vec2 uvPosition;
varying vec3 lightDir;
varying vec3 cameraDir;

vec4 norm;
vec3 lightDirNorm;
vec3 cameraDirNorm;

void main(void)
{
  norm = texture2D(textureMurNormalMap, uvPosition) * 2.0 - 1.0;
  lightDirNorm = normalize(lightDir);
  cameraDirNorm = normalize(cameraDir);

  vec3 halfVector = normalize(lightDirNorm + cameraDirNorm);
  float lambert = max(0.0, dot(vec3(norm), lightDirNorm));
  float phong = max(0.0, dot(vec3(norm), halfVector));
  float specularPower = pow(phong, shininess);

  float diffuse = difuseLightFrac * lambert;
  float specular = specularLightFrac * specularPower;

  gl_FragColor = ambiantColor*texture2D(textureMurAmbiant, uvPosition) + diffuse*texture2D(textureMurAmbiant, uvPosition) + specular;
}