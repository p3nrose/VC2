uniform sampler2D textureMurAmbiant;
uniform sampler2D textureMurNormalMap;
uniform vec4 ambiantColor;
uniform float difuseLightFrac;
uniform float specularLightFrac;
uniform float shininess;

uniform float scale;
uniform float bias;
uniform sampler2D textureMurHauteurMap;

varying vec2 uvPosition;
varying vec3 lightDir;
varying vec3 cameraDir;

vec4 norm;
vec3 lightDirNorm;
vec3 cameraDirNorm;

void main(void)
{
  lightDirNorm = normalize(lightDir);
  cameraDirNorm = normalize(cameraDir);

  float height = texture2D(textureMurHauteurMap, uvPosition).x;
  float hsb = height * scale + bias;
  vec2 parallaxUvPosition = uvPosition + hsb * cameraDirNorm.xy; 

  norm = texture2D(textureMurNormalMap, parallaxUvPosition) * 2.0 - 1.0;

  vec3 halfVector = normalize(lightDirNorm + cameraDirNorm);
  float lambert = max(0.0, dot(vec3(norm), lightDirNorm));
  float phong = max(0.0, dot(vec3(norm), halfVector));
  float specularPower = pow(phong, shininess);

  float diffuse = difuseLightFrac * lambert;
  float specular = specularLightFrac * specularPower;

  gl_FragColor = ambiantColor*texture2D(textureMurAmbiant, parallaxUvPosition) + diffuse*texture2D(textureMurAmbiant, parallaxUvPosition) + specular;
}