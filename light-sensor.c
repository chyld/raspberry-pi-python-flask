void setup() {
  Serial.begin(9600);
  while (!Serial);
  Serial.println("Serial Communication Ready");
}

void loop() {
  int sensor = analogRead(A1);
  float voltage = (sensor / 1023.0) * 3.3;
  Serial.println(voltage);
  delay(1);
}

