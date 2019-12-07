

// TIP: Use switch(true) to evaluate
// multiple arguments in a a case 
// expression

function getEligibility(user) {
  const permissions = [];
  switch(true) {
    case (user.age >= 18 && user.registered): {
      permissions.push('core-access');
    }

    case (user.age < 18 && user.hasParentalConsent): {
      permissions.push('child-permissions');
    }

    case (user.admin && user.email.endsWith('myservice.com')): {
      permissions.push('admin');
    }

    case (user.admin && user.email === 'admin@myservice.com'): {
      permissions.push('superadmin');
    }
  }

  return permissions;
}

