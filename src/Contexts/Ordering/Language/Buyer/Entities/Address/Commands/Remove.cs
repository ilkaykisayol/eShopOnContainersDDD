﻿using System;
using System.Collections.Generic;
using System.Text;
using Infrastructure.Commands;

namespace eShop.Ordering.Buyer.Entities.Address.Commands
{
    public class Remove : StampedCommand
    {
        public string UserName { get; set; }
        public Guid AddressId { get; set; }
    }
}
