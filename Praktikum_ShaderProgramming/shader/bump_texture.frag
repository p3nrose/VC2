varying vec2 uvPosition;

uniform sampler2D textureMurAmbiant;

void main(void)
{
  gl_FragColor = texture2D(textureMurAmbiant, uvPosition);
}