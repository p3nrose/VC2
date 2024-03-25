uniform float mixRatio;
uniform vec4 baseColor;
uniform samplerCube environmentMap;

varying vec3 cameraDir;
varying float lambert;

void main(void)
{
  gl_FragColor = mix(textureCube(environmentMap, cameraDir), lambert * baseColor, mixRatio);
}