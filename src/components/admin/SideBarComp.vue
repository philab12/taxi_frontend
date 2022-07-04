<template>
    <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
        <div class="nano">
            <div class="nano-content">
                <div class="logo shadow-lg" style="max-height: 72px;">
                    <router-link to="/dashboard">
                        <!--<img src="" style="height: 45px;"/>-->
                        <span class="font-white">Tram SL Admin </span>
                    </router-link>
                </div>
                <ul class="nav nav-pills flex-column mb-5">
                    <li class="label">Main</li>

                    <li class="nav-item">
                        <router-link to="/admin/dashboard" class="nav-link">
                            <i class="ti-home"></i> Dashboard
                            <!--<span class="badge badge-primary">2</span>-->
                        </router-link>
                    </li>

                    <li class="label">Mandatory Setup</li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link" data-bs-toggle="collapse" data-bs-target="#basic-setup-collapse" aria-expanded="false">
                            <i class="fa-solid fa-cogs me-1"></i>
                            Basic Setup
                            <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="basic-setup-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Countries
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Service Area
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Categories
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Vehicle Type
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Vehicle Make
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Vehicle Model
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Documents
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Pricing Parameters
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link" data-bs-toggle="collapse" data-bs-target="#price-card-collapse" aria-expanded="false">
                            <i class="fa-solid fa-money-bill-1 me-1"></i>
                            Price Card
                            <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="price-card-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        For User
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        For Driver
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-percent"></i> Promo Code
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-boxes"></i> Package Management
                        </router-link>
                    </li>

                    <li class="label">Taxi Management</li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-truck"></i> Manual Dispatch
                        </router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" data-bs-toggle="collapse" data-bs-target="#rides-collapse" aria-expanded="false">
                            <i class="fa-solid fa-taxi me-1"></i>
                           Rides
                            <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="rides-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Ongoing Rides
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Completed Rides
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Cancelled Rides
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Failed Rides
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Auto Cancelled Rides
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        All Rides
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="label">Driver Management</li>
                    
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" data-bs-toggle="collapse" data-bs-target="#drivers-collapse" aria-expanded="false">
                            <i class="fa-solid fa-id-card me-1"></i>
                           Drivers
                            <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="drivers-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        All Drivers
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Basic Signup
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Pending Approval
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Rejected Drivers
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Documents Near Expiry
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Expired Documents
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-car-side"></i> Vehicles
                        </router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" data-bs-toggle="collapse" data-bs-target="#map-collapse" aria-expanded="false">
                            <i class="fa-solid fa-map me-1"></i>
                           Map
                            <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="map-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Driver Map
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Heat Map
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="label">User Management</li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-users"></i> Users
                        </router-link>
                    </li>

                    <li class="label">Support System</li>
                    
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" data-bs-toggle="collapse" data-bs-target="#sos-collapse" aria-expanded="false">
                            <i class="fa-solid fa-phone-volume me-1"></i>
                           SOS
                            <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="sos-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        SOS Number
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        SOS Request
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-headset"></i> Customer Support
                        </router-link>
                    </li>

                    <li class="label">Other</li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-bell"></i> Promo Notification
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-wallet"></i> Wallet Recharge
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            <i class="fa-solid fa-ticket"></i> Cashout Request
                        </router-link>
                    </li>

                    <li class="label">Reports and Charts</li>
                    
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" data-bs-toggle="collapse" data-bs-target="#earnings-collapse" aria-expanded="false">
                            <i class="fa-solid fa-chart-line me-1"></i>
                           Earnings
                            <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="earnings-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Company
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Driver
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" data-bs-toggle="collapse" data-bs-target="#wallet_transactions-collapse" aria-expanded="false">
                            <i class="fa-solid fa-arrow-right-arrow-left me-1"></i>
                           Wallet Transactions
                            <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="wallet_transactions-collapse" style="">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        User
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link ps-5">
                                        Driver
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SideBarComp"
};
</script>

<style scoped>
.nav-link{
  color: #bdbdc7;
  border-radius: 0 !important;
  padding: 1em 1.5em;
}

.nav-link.router-link-active, .nav-link:hover{  
    background-color: #6b51df !important;
    color: #fff;
}
</style>