<script>
    // @ts-ignore
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    //export let data
    //const authUser = data.authUser;
  </script>
  
  <Navbar>
    <NavBrand href="/">
      <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">OP Website</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
      <!-- <Avatar id="avatar-menu" src="/images/profile-picture-3.webp" /> -->
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
       <!--  <span class="block text-sm">{ authUser.email }</span>
        <span class="block truncate text-sm font-medium">{ authUser.email }</span> -->
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out
        <div class="ml-4">
          <form action="?/logout" method="POST">
              <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                  Logout
              </button>
          </form>
      </div>
      </DropdownItem>
    </Dropdown>
    <NavUl>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
      <NavLi href="/login">Login</NavLi>
    </NavUl>
  </Navbar>
  <slot></slot>