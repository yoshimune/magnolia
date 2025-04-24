uniform sampler2D map;
uniform mat3 mapUvTransform;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    vec2 mapUv = (mapUvTransform * vec3(uv, 1)).xy;
    vec4 sampledDiffuseColor = texture2D(map, mapUv);
    vec4 diffuseColor = vec4(1.0, 1.0, 1.0, 1.0); // White color
    diffuseColor *= sampledDiffuseColor;

    gl_FragColor = diffuseColor;
}