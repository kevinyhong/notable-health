DROP DATABASE IF EXISTS notable;

CREATE DATABASE notable;
USE notable;

CREATE TABLE physicians (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(35) NOT NULL,
  last_name VARCHAR(35) NOT NULL,
  email VARCHAR(320) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE patients (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(35) NOT NULL,
  last_name VARCHAR(35) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE appointments (
  id INT NOT NULL AUTO_INCREMENT,
  attending_id MEDIUMINT NOT NULL,
  patient_id INT NOT NULL,
  apt_time DATETIME NOT NULL,
  kind TINYINT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (attending_id) REFERENCES physicians(id),
  FOREIGN KEY (patient_id) REFERENCES patients(id)
);

INSERT INTO patients (first_name, last_name) VALUES ('Elliot', 'Tillman');
INSERT INTO patients (first_name, last_name) VALUES ('Theresa', 'Hardy');
INSERT INTO patients (first_name, last_name) VALUES ('Anaiya', 'Pennington');
INSERT INTO patients (first_name, last_name) VALUES ('Iosif', 'Dowling');
INSERT INTO patients (first_name, last_name) VALUES ('Dawn', 'Wilder');
INSERT INTO patients (first_name, last_name) VALUES ('Amrit', 'Richards');
INSERT INTO patients (first_name, last_name) VALUES ('Hettie', 'Gale');
INSERT INTO patients (first_name, last_name) VALUES ('Alexandra', 'Bowman');
INSERT INTO patients (first_name, last_name) VALUES ('Aamina', 'Horn');
INSERT INTO patients (first_name, last_name) VALUES ('Gabriella', 'Hatfield');
INSERT INTO patients (first_name, last_name) VALUES ('Emelia', 'Holding');
INSERT INTO patients (first_name, last_name) VALUES ('Willa', 'Phillips');
INSERT INTO patients (first_name, last_name) VALUES ('Layla-Rose', 'Friedman');
INSERT INTO patients (first_name, last_name) VALUES ('Jeffrey', 'Whelan');
INSERT INTO patients (first_name, last_name) VALUES ('Areeba', 'Salas');

INSERT INTO physicians (first_name, last_name, email) VALUES ('Sam', 'Barnes', 'sam@notablehealth.com');
INSERT INTO physicians (first_name, last_name, email) VALUES ('Kit', 'Ko', 'kit@notablehealth.com');
INSERT INTO physicians (first_name, last_name, email) VALUES ('Kevin', 'Ong', 'kevinyaohuiong@gmail.com');

INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (1, 2, '2020-11-23 08:00:00', 0);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (1, 4, '2020-11-23 09:00:00', 0);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (1, 6, '2020-11-23 09:45:00', 1);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (1, 8, '2020-11-23 10:30:00', 1);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (1, 10, '2020-11-23 11:15:00', 0);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (1, 12, '2020-11-23 14:00:00', 1);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (1, 14, '2020-11-24 09:00:00', 1);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (2, 3, '2020-11-24 09:00:00', 0);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (2, 5, '2020-11-24 09:45:00', 0);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (2, 7, '2020-11-24 11:00:00', 0);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (2, 9, '2020-11-24 15:00:00', 0);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (2, 11, '2020-11-24 16:00:00', 1);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (3, 1, '2020-11-29 10:00:00', 1);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (3, 13, '2020-11-28 10:00:00', 0);
INSERT INTO appointments (attending_id, patient_id, apt_time, kind) VALUES (3, 15, '2020-11-27 10:00:00', 1);
