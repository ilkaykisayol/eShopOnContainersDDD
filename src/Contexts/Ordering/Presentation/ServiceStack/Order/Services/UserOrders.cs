﻿using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.ServiceStack;
using ServiceStack;

namespace eShop.Ordering.Order.Services
{
    [Api("Ordering")]
    [Route("/order", "GET")]
    public class UserOrders : Paged<Models.OrderingOrderIndex>
    {
    }
}
