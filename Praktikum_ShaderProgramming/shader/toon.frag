varying vec3 worldSpaceNormal;
uniform vec3 lightDirection;

void main(void)
{
    float dotProduct = dot(worldSpaceNormal, lightDirection);

    vec3 color;

    if (dotProduct > 0.8) {
        color = vec3(0.8, 1.0, 1.0);
    } else if (dotProduct > 0.6) {
        color = vec3(0.3, 0.6, 0.3);
    } else if (dotProduct > 0.3) {
        color = vec3(0.2, 0.4, 0.2);
    } else {
        color = vec3(0.1, 0.1, 0.2);
    }

    gl_FragColor = vec4(color, 1.0);
}