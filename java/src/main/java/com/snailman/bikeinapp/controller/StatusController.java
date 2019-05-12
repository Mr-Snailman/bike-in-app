package com.snailman.bikeinapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/status")
@CrossOrigin("*")
public class StatusController {

  private boolean status;

  @GetMapping
  public ResponseEntity<Boolean> getStatus() {
    return ResponseEntity.ok(this.status);
  }

  @PutMapping
  public ResponseEntity<Boolean> updateStatus() {
    this.status = !this.status;
    return ResponseEntity.ok(this.status);
  }
}
