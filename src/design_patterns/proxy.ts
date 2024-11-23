/**
 * Proxy Pattern is a structural design pattern that provides an object that acts as a substitute for a real service object used by a client. A proxy receives client requests, does some work (access control, caching, etc.) and then passes the request to a service object.
 *
 * Use Case: When you need to control access to an object, add extra functionalities, or cache the results of an operation.
 * Examples:
 * Virtual Proxies: Loading heavy objects on demand (e.g., images, videos).
 * Access Control: Restricting access to resources based on user roles.
 * Logging or Monitoring: Tracking method calls or data usage transparently
 */

interface Service {
  request(): void;
}

class RealService implements Service {
  request(): void {
    console.log("Request handled by Real Service.");
  }
}

class ProxyService implements Service {
  private realService!: RealService;

  request(): void {
    if (!this.realService) {
      this.realService = new RealService();
    }
    console.log("Proxy: Forwarding request to Real Service.");
    this.realService.request();
  }
}

const proxy = new ProxyService();
proxy.request();
// Output:
// Proxy: Forwarding request to Real Service.
// Request handled by Real Service.
