import { sleep } from 'k6'
import http from 'k6/http'


export default function main() {

  http.get('http://localhost:8081/apple');
  http.get('http://localhost:8081/banana');
  http.get('http://localhost:8081/orange');

  sleep(1)
}
