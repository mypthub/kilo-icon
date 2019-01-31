const svgpath = require('svgpath');

const transformed = svgpath("M299.221379,255.5 L415.281127,371.559747 C421.572958,377.851578 421.572958,388.052652 415.281127,394.344483 L395.344483,414.281127 C389.052652,420.572958 378.851578,420.572958 372.559747,414.281127 L256.5,298.221379 L140.440253,414.281127 C134.148422,420.572958 123.947348,420.572958 117.655517,414.281127 L97.7188733,394.344483 C91.4270422,388.052652 91.4270422,377.851578 97.7188733,371.559747 L213.778621,255.5 L97.7188733,139.440253 C91.4270422,133.148422 91.4270422,122.947348 97.7188733,116.655517 L117.655517,96.7188733 C123.947348,90.4270422 134.148422,90.4270422 140.440253,96.7188733 L256.5,212.778621 L372.559747,96.7188733 C378.851578,90.4270422 389.052652,90.4270422 395.344483,96.7188733 L415.281127,116.655517 C421.572958,122.947348 421.572958,133.148422 415.281127,139.440253 L299.221379,255.5 Z")
  .rotate(45, 256, 256)
  .round(6)
.toString();

console.log(transformed);

return transformed;
