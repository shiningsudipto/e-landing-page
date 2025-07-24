import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Order Confirmed!</h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="shadow-card text-left">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-medium">Order Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    We're preparing your items for shipment. You'll receive a confirmation email shortly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h3 className="font-medium">Shipping Updates</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive tracking information once your order ships. Estimated delivery: 3-5 business days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              onClick={() => navigate('/')}
              size="lg"
            >
              Continue Shopping
            </Button>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-muted-foreground">
            Need help? Contact our support team at support@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;