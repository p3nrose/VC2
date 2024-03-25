varying vec3 normalWS;

uniform vec3 lightDir;

void main(void)
{
  vec3 normal = normalize(normalWS);
  float scalar = dot(normal, lightDir);
  if (scalar > 0.8){
    gl_FragColor = vec4(0.8,0.8,1.0,1.0);
  }else if(scalar > 0.6){
    gl_FragColor = vec4(0.3,0.3,0.6,1.0);
  }else if(scalar > 0.3){
    gl_FragColor = vec4(0.2,0.2,0.4,1.0);
  }else{
    gl_FragColor = vec4(0.1,0.1,0.2,1.0);
  }
}