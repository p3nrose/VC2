in vec3 WorldSpaceNormal;
uniform vec3 LightDirection;

void main(void)
{
    vec3 normal = normalize(WorldSpaceNormal);
    vec3 lightDir = normalize(LightDirection);

    float diff = max(0.0, dot(normal, lightDir));

    vec3 color;
    if (diff > 0.8) color = vec3(0.8, 0.8, 1.0);
    else if (diff > 0.6) color = vec3(0.3, 0.3, 0.6);
    else if (diff > 0.3) color = vec3(0.2, 0.2, 0.4);
    else color = vec3(0.1, 0.1, 0.2);

    gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}