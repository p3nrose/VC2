varying vec2 vUV;
uniform sampler2D uvNormalTexture;

void main(void)
{
    gl_FragColor = texture2D(uvNormalTexture, vUV);
}