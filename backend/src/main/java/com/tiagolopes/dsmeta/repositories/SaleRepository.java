package com.tiagolopes.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tiagolopes.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {}