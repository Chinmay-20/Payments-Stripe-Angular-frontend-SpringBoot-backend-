package com.stripepayment.stripe.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import com.stripe.model.Charge;
import com.stripepayment.stripe.services.StripeClient;

@RestController
@RequestMapping("/payment")
public class PaymentController{
    
    private StripeClient stripeClient;

    @Autowired
    PaymentController(StripeClient stripeClient){
        this.stripeClient = stripeClient;
    }

    @PostMapping("/charge")
    public Charge chargeCard(HttpServletRequest request) throws Exception {
        
        String token = request.getHeader("token");
        Double amount = Double.parseDouble(request.getHeader("amount"));

        return this.stripeClient.chargeNewCard(token, amount);
    }
    
}