export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const { ok, status, statusText, headers } = response;

    if (!ok) {
      // Create more user-friendly error messages based on status codes
      let userMessage = "Something went wrong while fetching data.";

      switch (status) {
        case 400:
          userMessage =
            "The request was invalid. Please check your input and try again.";
          break;
        case 401:
          userMessage =
            "You're not authorized to access this resource. Please log in or check your permissions.";
          break;
        case 403:
          userMessage =
            "Access forbidden. You don't have permission to view this content.";
          break;
        case 404:
          userMessage =
            "The requested content was not found. It may have been removed or moved.";
          break;
        case 429:
          userMessage =
            "Too many requests! Please wait a moment before trying again. (Rate limit exceeded)";
          break;
        case 500:
          userMessage =
            "Our servers are experiencing issues. Please try again later.";
          break;
        case 502:
        case 503:
        case 504:
          userMessage =
            "Service temporarily unavailable. Please try again in a few minutes.";
          break;
        default:
          if (status >= 400 && status < 500) {
            userMessage =
              "There was a problem with your request. Please try again.";
          } else if (status >= 500) {
            userMessage =
              "Our servers are having trouble. Please try again later.";
          }
      }

      const enhancedError = new Error(userMessage);
      enhancedError.status = status;
      enhancedError.statusText = statusText;
      enhancedError.userMessage = userMessage;
      enhancedError.technicalDetails = `HTTP ${status}: ${statusText}`;

      throw enhancedError;
    }

    // figure out the type of response (JSON or non-JSON)
    const isJson = (headers.get("content-type") || "").includes(
      "application/json"
    );

    // use response.json() for JSON responses and response.text() for all other content types
    const responseData = await (isJson ? response.json() : response.text());

    // return a "tuple" representing [data, error]. Here the data exists and the error is null.
    return [responseData, null];
  } catch (error) {
    // Handle different types of errors
    let enhancedError = error;

    if (error.name === "TypeError" && error.message.includes("fetch")) {
      // Network or fetch-related errors
      enhancedError = new Error(
        "Unable to connect to the server. Please check your internet connection and try again."
      );
      enhancedError.errorType = "NETWORK_ERROR";
      enhancedError.userMessage =
        "Connection failed. Please check your internet connection.";
    } else if (error.name === "AbortError") {
      // Request was cancelled
      enhancedError = new Error("Request was cancelled.");
      enhancedError.errorType = "CANCELLED";
      enhancedError.userMessage = "Request was cancelled.";
    } else if (!error.userMessage) {
      // Generic error handling
      enhancedError.userMessage =
        "An unexpected error occurred. Please try again.";
      enhancedError.errorType = "UNKNOWN";
    }

    // Add timestamp and URL for debugging
    enhancedError.timestamp = new Date().toISOString();
    enhancedError.url = url;

    console.warn("Fetch Error:", {
      message: enhancedError.userMessage,
      technical: enhancedError.technicalDetails || enhancedError.message,
      status: enhancedError.status,
      url: enhancedError.url,
      timestamp: enhancedError.timestamp,
    });

    // return a "tuple" representing [data, error]. Here the data is null and the error exists.
    return [null, enhancedError];
  }
};
